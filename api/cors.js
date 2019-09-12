import fetch from "isomorphic-unfetch";

const Cors = async (req, res) => {
  const { refer } = req.query;
  try {
    const resProxy = await fetch(refer);
    res.status(200).send(resProxy.body);
  } catch (e) {
    res.status(400);
  }
};

export default Cors;
