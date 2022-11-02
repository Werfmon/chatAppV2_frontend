import { getTokenFromStorage } from "../../../Helper/getTokenFromStorage";
import { Dispatch, SetStateAction } from "react";
import EnvConfig from "../../../../EnvConfig";

export function getAllAvailableUsers(
  search: string,
  setUsers: Dispatch<SetStateAction<Object[]>>
) {
  getTokenFromStorage().then((token) => {
    let xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
      if (xhr.readyState == XMLHttpRequest.DONE) {
        const data = JSON.parse(xhr.responseText);
        if (data.ok) {
          setUsers(data.data);
        }
        console.info(data.message);
      }
    };

    xhr.open('GET', `${EnvConfig.API}/person/all-available?search=${search}`);

    xhr.setRequestHeader("Authorization", `Bearer ${token}`);

    xhr.send();

    xhr.onerror = function (e) {
      console.error(e.target);
    };
  });
}
