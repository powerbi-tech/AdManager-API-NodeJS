import User from './user.model';
import HTTPStatus from 'http-status';
export async function signUp(req, res) {
  try {
    const user = await User.create(req.body);
    return res.status(HTTPStatus.OK).json(user);
  } catch (e) {
    console.log(e);
    return res.status(422).json(e);
  }
}

export function login(req, res, next) {
  res.status(HTTPStatus.OK).json(req.user.toAuthJSON());
  return next();
}
