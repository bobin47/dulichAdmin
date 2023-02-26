import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  HomeFilled,
  IdcardFilled,
  BookFilled,
  SwitcherFilled,
} from "@ant-design/icons";
import classNames from "classnames";

export default function Navigate() {
  const [active, setActive] = useState("home");
  console.log(active);

  return (
    <div className="flex flex-col gap-3 p-3">
      <Link
        to="/"
        className={classNames(
          "flex flex-col items-center py-3  rounded-3xl hover:bg-gray-200",
          {
            "bg-gray-200": active === "home",
          }
        )}
      >
        <HomeFilled className="text-2xl" />
        Home
      </Link>
      <Link
        to="/profile"
        className={classNames(
          "flex flex-col items-center p-3 rounded-3xl hover:bg-gray-200",
          {
            "bg-gray-200": active === "profile",
          }
        )}
        onClick={() => setActive("profile")}
      >
        <IdcardFilled className="text-2xl" />
        Lo trinh
      </Link>
      <Link
        className={classNames(
          "flex flex-col items-center p-3 rounded-3xl hover:bg-gray-200",
          {
            "bg-gray-200": active === "hoc",
          }
        )}
        onClick={() => setActive("hoc")}
      >
        <BookFilled className="text-2xl" />
        Hoc
      </Link>
      <Link
        className={classNames(
          "flex flex-col items-center p-3 rounded-3xl hover:bg-gray-200",
          {
            "bg-gray-200": active === "blog",
          }
        )}
        onClick={() => setActive("blog")}
      >
        <SwitcherFilled className="text-2xl" />
        Blog
      </Link>
    </div>
  );
}
