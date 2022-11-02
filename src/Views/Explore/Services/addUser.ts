import { Dispatch, SetStateAction } from "react";
import { getTokenFromStorage } from "../../../Helper/getTokenFromStorage";
import EnvConfig from "../../../../EnvConfig";

export function addUser(
  uuid: string,
  setRefresh: Dispatch<SetStateAction<number>>,
  refresh: number
) {
  getTokenFromStorage()
    .then((token) => {
      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
          const data = JSON.parse(xhr.responseText);
          if (data.ok) {
            setRefresh(refresh + 1);
          }
          console.info(data.message);
        }
      };

      xhr.open("POST", `${EnvConfig.API}/friendship/${uuid}/add`);

      xhr.setRequestHeader("Authorization", `Bearer ${token}`);

      xhr.send();

      xhr.onerror = function (e) {
        console.error(e.target);
      };
    })
    .catch((err) => console.error(err));
}
