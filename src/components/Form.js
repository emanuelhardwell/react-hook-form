import React from "react";
import { useForm } from "react-hook-form";

export const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  // RETURN
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-4">
          <div className="card">
            <div className="card-body">
              <h5> Form of product </h5>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="title"
                    {...register("title")}
                  />
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="number"
                    placeholder="price"
                    {...register("price")}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="2"
                    placeholder="description"
                    {...register("description")}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="category"
                    {...register("category")}
                  />
                </div>
                <div className="mb-3 d-grid gap-2">
                  <button className="btn btn-primary" type="submit">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="col-md-8">List of products</div>
      </div>
    </div>
  );
};
