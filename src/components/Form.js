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
                    {...register("title", {
                      required: true,
                      maxLength: 20,
                      minLength: 2,
                    })}
                  />
                  {errors.title?.type === "required" && (
                    <small className="text-danger">
                      El titulo es requerido
                    </small>
                  )}
                  {errors.title?.type === "maxLength" && (
                    <small className="text-danger">
                      El titulo debe tener maximo 20 caracteres
                    </small>
                  )}
                  {errors.title?.type === "minLength" && (
                    <small className="text-danger">
                      El titulo debe tener minimo 2 caracteres
                    </small>
                  )}
                </div>

                <div className="mb-3">
                  <input
                    className="form-control"
                    type="number"
                    placeholder="price"
                    {...register("price", {
                      required: true,
                      min: 10,
                      max: 1000,
                    })}
                  />
                  {errors.price?.type === "required" && (
                    <small className="text-danger">
                      El precio es requerido
                    </small>
                  )}
                  {errors.price?.type === "max" && (
                    <small className="text-danger">
                      El precio maximo es de 1,000
                    </small>
                  )}
                  {errors.price?.type === "min" && (
                    <small className="text-danger">
                      El precio minimo es de 10
                    </small>
                  )}
                </div>

                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="2"
                    placeholder="description"
                    {...register("description", {
                      required: true,
                      maxLength: 50,
                      minLength: 10,
                    })}
                  ></textarea>
                  {errors.description?.type === "required" && (
                    <small className="text-danger">
                      La descripcion es requerida
                    </small>
                  )}
                  {errors.description?.type === "maxLength" && (
                    <small className="text-danger">
                      La descripcion debe tener maximo 50 caracteres
                    </small>
                  )}
                  {errors.description?.type === "minLength" && (
                    <small className="text-danger">
                      La descripcion debe tener maximo 10 caracteres
                    </small>
                  )}
                </div>

                <div className="mb-3">
                  <input
                    className="form-control"
                    type="text"
                    placeholder="category"
                    {...register("category", {
                      required: true,
                      maxLength: 20,
                      minLength: 5,
                    })}
                  />
                  {errors.category?.type === "required" && (
                    <small className="text-danger">
                      La categoria es requerida
                    </small>
                  )}
                  {errors.category?.type === "maxLength" && (
                    <small className="text-danger">
                      La categoria debe tener maximo 20 caracteres
                    </small>
                  )}
                  {errors.category?.type === "minLength" && (
                    <small className="text-danger">
                      La categoria debe tener minimo 5 caracteres
                    </small>
                  )}
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
