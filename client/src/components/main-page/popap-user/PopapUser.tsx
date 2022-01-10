import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ShowModal, UpdateUser } from "../../../store/actions";
import {addUser} from '../../../store/requests'


import "./popap-user.scss";

export default function PopapUser() {
  const dispatch = useDispatch();

  const [userInfo, setInfoUser] = useState({
    userName: "",
    userPassword: "",
  });

  function createUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    dispatch(ShowModal(false))
    dispatch(addUser(userInfo))
  }


  return (
    <div className="window">
      <div className="window-popap">
        <div className="clouse" onClick={() =>dispatch(ShowModal(false))}>x</div>
        <form onSubmit={(e) => createUser(e)}>
          <p>Имя</p>
          <input
            type="text"
            onChange={(e) =>
              setInfoUser({ ...userInfo, userName: e.target.value })
            }
          />
          <p>Пароль</p>
          <input
            type="password"
            onChange={(e) =>
              setInfoUser({ ...userInfo, userPassword: e.target.value })
            }
          />
          <button>Ок</button>
        </form>
      </div>
    </div>
  );
}
