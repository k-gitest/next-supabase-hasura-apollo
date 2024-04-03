'use client';

import React, { useState, useEffect } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { hogesQuery, hogeInsert, hogeUpdate, hogeDelete } from '../constants';
import { Hoges } from '../__generated__/graphql';
import { timeChange } from '../lib/dateconverter';
import { Button } from './ui/button';
import Modal from './Modal';

const TodoList = ({ userId }: { userId: string }): JSX.Element => {
  const { loading, data: queryData, refetch: refetchHoges } = useQuery(hogesQuery);

  const [insertHoge, { loading: mutationLoading }] = useMutation(hogeInsert);

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    const formElement = event.currentTarget;
    event.preventDefault();
    const { body } = Object.fromEntries(new FormData(event.currentTarget));
    console.log(body);
    if (typeof body !== 'string' || !body) return;

    await insertHoge({
      variables: {
        objects: [{ body, uid: userId }],
      },
      onCompleted: () => refetchHoges(),
    });

    formElement.reset();
  };

  const [updateHoge] = useMutation(hogeUpdate);
  const [updatehoge, setUpdatehoge] = useState<Hoges | null>(null);

  const updateModal = async (task: Hoges | null) => {
    setUpdatehoge(task);
    const modalElement = document.getElementById('my_modal_2') as HTMLDialogElement;
    if (modalElement) {
      modalElement.showModal();
    }
  };

  const onUpdate = async (event: React.FormEvent<HTMLFormElement>) => {
    const formElement = event.currentTarget;
    event.preventDefault();
    const { id, body } = Object.fromEntries(new FormData(event.currentTarget));
    console.log(id, body);
    if (typeof body !== 'string' || !body) return;
    await updateHoge({
      variables: {
        _set: {
          body: body,
        },
        _eq: id,
      },
      onCompleted: () => refetchHoges(),
    });
    formElement.reset();
    const modalElement = document.getElementById('my_modal_2') as HTMLDialogElement;
    if (modalElement) {
      modalElement.close();
    }
  };

  const [deleteHoge] = useMutation(hogeDelete);
  const onDelete = async (id: number) => {
    if (typeof id !== 'number' || !id) return;
    await deleteHoge({
      variables: {
        _eq: id,
      },
      onCompleted: () => refetchHoges(),
    })
  }

  useEffect(() => {
    console.log(updatehoge);
  }, [updatehoge]);

  if (loading) {
    return <div>Loading</div>;
  }

  const tasks: Hoges[] = queryData?.hoges;
  return (
    <div className="flex h-full flex-col">
      <div className="min-h-0 grow overflow-y-auto">
        {tasks?.map((task: Hoges) => (
          <div key={task.id} className="flex p-1 text-lg gap-2">
            <div className="grow">{task.id}</div>
            <div className="grow">{task.body}</div>
            <div className="grow">{timeChange(task.created_at)}</div>
            <Button variant="secondary" onClick={() => updateModal(task)}>
              更新
            </Button>
            <Button variant="secondary" onClick={() => onDelete(task.id)}>
              削除
            </Button>
          </div>
        ))}
      </div>

      <Modal>
        <div className="text-primary">
          <form onSubmit={onUpdate}>
            <div>{updatehoge?.id}</div>
            <input type="hidden" name="id" value={updatehoge?.id} />
            <input
              type="text"
              name="body"
              value={updatehoge?.body || ''}
              onChange={(e) => setUpdatehoge((prevState) => ({ ...prevState, body: e.target.value }))}
            />
            <div>{updatehoge?.created_at}</div>
            <Button type="submit" variant="default">
              更新
            </Button>
          </form>
        </div>
      </Modal>

      <form className="flex items-center p-1" onSubmit={onSubmit}>
        <input
          className="mr-2 grow rounded border border-green-300 bg-transparent px-2 py-1"
          type="text"
          name="body"
          placeholder="New Text"
        />
        <button
          type="submit"
          disabled={mutationLoading}
          className="rounded bg-green-400 px-4 py-1 text-lg text-black disabled:bg-gray-500"
        >
          {mutationLoading ? '送信中...' : '送信'}
        </button>
      </form>
    </div>
  );
};

export default TodoList;
