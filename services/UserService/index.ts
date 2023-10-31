import http from "request";

import config from "../../config/config.json";
import { UserT } from "./types";

class UserService {
  static create = async (userInfo: UserT) => {
    const { firstName, lastName, numberPhone, color, quantity, instagram } =
      userInfo;
    let fields = [
      "<b>Ім'я</b>: " + firstName,
      "<b>Прізвище</b>: " + lastName,
      "<b>Телефон</b>: " + numberPhone,
      "<b>Колір</b>: " + color,
      "<b>Кількість</b>: " + quantity,
      "<b>instagram</b>: " + instagram,
    ];
    let msg = "";
    fields.forEach((field) => {
      msg += field + "\n";
    });
    msg = encodeURI(msg);

    const result = http.post(
      `https://api.telegram.org/bot${config.telegram.token}/sendMessage?chat_id=${config.telegram.chat}&parse_mode=html&text=${msg}`
    );

    console.log(result);

    return result;
  };
}

export default UserService;
