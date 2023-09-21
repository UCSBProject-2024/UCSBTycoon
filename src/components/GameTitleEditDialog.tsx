import { useFormik } from 'formik';
import classNames from 'classnames';
import * as yup from 'yup';
import { CloseIcon } from './CloseIcon';
import { ModalDialog } from './ModalDialog';
import { useGameDispatch } from '../hooks/useGameDispatch';
import { useGame } from '../hooks/useGame';

type Props = {
  onClose: () => void;
};

type Values = {
  title?: string;
};

export function GameTitleEditDialog({ onClose }: Props) {
  const game = useGame();
  const gameDispatch = useGameDispatch();

  const formik = useFormik({
    initialValues: { title: game?.title },
    validationSchema: yup.object({ title: yup.string().max(24).required() }),
    onSubmit: (values) => handleSubmitForm(values)
  });

  function handleSubmitForm(values: Values) {
    if (!(gameDispatch && values.title)) return;
    gameDispatch({ type: 'update', subtype: 'title', title: values.title });
    onClose();
  }

  return (
    <ModalDialog className="rounded-xl border-2 border-orange-600" show={true} onHide={onClose}>
      <div className="border-b p-3">
        <div className="flex justify-between">
          <h1 className="font-semibold">Title</h1>
          <CloseIcon onClick={onClose} />
        </div>
      </div>
      <div className="p-3">
        <form id="form" onSubmit={formik.handleSubmit}>
          <input
            id="title"
            name="title"
            type="text"
            placeholder="Title"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            className={classNames({ 'bg-red-200': formik.touched.title && formik.errors.title })}
          />
        </form>
      </div>
      <div className="border-t p-3">
        <div className="flex justify-end gap-1">
          <button className="rounded-lg bg-orange-300 px-6 py-1" onClick={onClose}>
            Close
          </button>
          <button type="submit" form="form" className="rounded-lg bg-orange-900 px-6 py-1 text-white">
            Save
          </button>
        </div>
      </div>
    </ModalDialog>
  );
}
