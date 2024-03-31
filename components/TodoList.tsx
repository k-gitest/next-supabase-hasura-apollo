'use client';

import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { taskInsert, tasksQuery, taskUpdate } from '../constants';
import { OrderByDirection } from '../__generated__/graphql';

const TodoList = (): JSX.Element => {
  const {
    loading,
    data: queryData,
    refetch: refetchTasks,
  } = useQuery(tasksQuery, {
    variables: {
      orderBy: [
        {
          created_at: OrderByDirection.DescNullsFirst,
        },
      ],
    },
  });

  const [insertTask, { loading: mutationLoading }] = useMutation(taskInsert);

  const [updateTask] = useMutation(taskUpdate);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const formElement = event.currentTarget;
    event.preventDefault();
    const { title } = Object.fromEntries(new FormData(event.currentTarget));
    if (typeof title !== 'string' || !title) return;
    await insertTask({
      variables: {
        objects: [{ title }],
      },
      onCompleted: () => refetchTasks(),
    });
    formElement.reset();
  };

  const toggleTaskStatus = async (taskId: string, updatedStatus: boolean) => {
    await updateTask({
      variables: {
        set: {
          is_completed: updatedStatus,
        },
        filter: {
          id: {
            eq: taskId,
          },
        },
      },
      onCompleted: () => refetchTasks(),
    });
  };

  if (loading) {
    return <div>Loading</div>;
  }

  const tasks = queryData!.tasksCollection!.edges;
  return (
    <div className="flex h-full flex-col">
      <div className="min-h-0 grow overflow-y-auto">
        {tasks.map((task) => (
          <div key={task.node.id} className="flex p-1 text-lg">
            <div className="grow">{task.node.title}</div>
            <button className="px-2" onClick={() => toggleTaskStatus(task.node.id, !task.node.is_completed)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`size-6 ${task.node.is_completed ? 'stroke-green-500' : 'stroke-gray-500'}`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {task.node.is_completed ? '完了' : '未完'}
            </button>
          </div>
        ))}
      </div>
      <form className="flex items-center p-1" onSubmit={onSubmit}>
        <input
          className="mr-2 grow rounded border border-green-300 bg-transparent px-2 py-1"
          type="title"
          name="title"
          placeholder="New Task"
        />
        <button
          type="submit"
          disabled={mutationLoading}
          className="rounded bg-green-400 px-4 py-1 text-lg text-black disabled:bg-gray-500"
        >
          {mutationLoading ? 'Saving...' : 'Save'}
        </button>
      </form>
    </div>
  );
};

export default TodoList;
