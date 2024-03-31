'use client';

import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { hogesQuery } from '../constants';
import { OrderByDirection } from '../__generated__/graphql';

const TodoList = (): JSX.Element => {
  const {
    loading,
    data: queryData,
    refetch: refetchTasks,
  } = useQuery(hogesQuery, {
    variables: {
      orderBy: [
        {
          created_at: OrderByDirection.DescNullsFirst,
        },
      ],
    },
  });

  /*
  const [insertTask, { loading: mutationLoading }] = useMutation(taskInsert);

  const [updateTask] = useMutation(taskUpdate);
  */

  /*
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
  */

  /*
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
  */

  if (loading) {
    return <div>Loading</div>;
  }

  const tasks = queryData!.hogesCollection!.edges;
  return (
    <div className="flex h-full flex-col">
      <div className="min-h-0 grow overflow-y-auto">
        {tasks.map((task) => (
          <div key={task.node.id} className="flex p-1 text-lg">
            <div className="grow">{task.node.body}</div>
            <div className="grow">{task.node.created_at}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
