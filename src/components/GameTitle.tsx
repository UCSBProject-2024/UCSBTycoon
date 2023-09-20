import { useState } from 'react';
import { useFormik } from 'formik';
import classNames from 'classnames';
import * as yup from 'yup';
import { PencilIcon } from './PencilIcon';
import { CloseIcon } from './CloseIcon';
import { ModalDialog } from './ModalDialog';

export function GameTitle() {
  const [show, setShow] = useState(false);

  const formik = useFormik({
    initialValues: { title: '' },
    validationSchema: yup.object({ title: yup.string().max(24).required() }),
    onSubmit: (values) => console.log(values)
  });

  return (
    <div className="relative m-8 rounded-lg border-2 border-orange-600 bg-orange-200 text-orange-900">
      <h1 className="p-2 pe-10 text-center text-3xl font-semibold md:p-4 md:pe-14 md:text-5xl">The Bakery</h1>
      <PencilIcon onClick={() => setShow(true)} />
      <ModalDialog className="rounded-xl border-2 border-orange-600" show={show} onHide={() => setShow(false)}>
        <div className="border-b p-3">
          <div className="flex justify-between">
            <h1 className="font-semibold">Title</h1>
            <CloseIcon onClick={() => setShow(false)} />
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
            <button className="rounded-lg bg-orange-300 px-6 py-1" onClick={() => setShow(false)}>
              Close
            </button>
            <button type="submit" form="form" className="rounded-lg bg-orange-900 px-6 py-1 text-white">
              Save
            </button>
          </div>
        </div>
      </ModalDialog>
    </div>
  );
}
