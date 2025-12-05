import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

const schema = z.object({
  Description: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" }),
  Amount: z.number({ invalid_type_error: "Age is required." }),
  Category: z
    .array(z.string())
    .min(1, { message: "Select at least one category" }),
});

type FormData = z.infer<typeof schema>;

const ExpenseTracker = () => {
  const [showMenu, setShowMenu] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleClick = () => {
    console.log("Clicked");
    setShowMenu(!showMenu);
  };

  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="Description" className="form-label">
          Description
        </label>
        <input
          {...register("Description")}
          id="Description"
          type="text"
          className="form-control"
        />
        {errors.Description && (
          <p className="text-danger">{errors.Description.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="Amount" className="form-label">
          Amount
        </label>
        <input
          {...register("Amount")}
          id="Amount"
          type="text"
          className="form-control"
        />
        {errors.Amount && (
          <p className="text-danger">{errors.Amount.message}</p>
        )}
      </div>

      <div className="mb-3">
        <label htmlFor="Category" className="form-label">
          Category
        </label>
        <div className="dropdown  mb-3">
          <button
            className="btn btn-secondary dropdown-toggle w-100"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            onClick={handleClick}
          >
            Select Category
          </button>
          {showMenu == true && (
            <ul
              {...register("Category")}
              id="Category"
              className="dropdown-menu show w-100 text-center"
            >
              <li>Groceries</li>
              <li>Utilities</li>
              <li>Entertainment</li>
            </ul>
          )}
        </div>

        {errors.Category && (
          <p className="text-danger">{errors.Category.message}</p>
        )}
      </div>
      <button disabled={!isValid} className="btn btn-primary mb-5">
        Submit
      </button>

      <div className="container">
        <div className="row">
            <div className="col-3">Description</div>
            <div className="col-3">Amount</div>
            <div className="col-3">Category</div>
            <div className="col-3"></div>
        </div>
      </div>
    </form>
  );
};

export default ExpenseTracker;
