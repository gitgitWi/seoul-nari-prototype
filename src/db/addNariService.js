import { firestore as db } from "./config";

const naris = db.collection("/naris");

export default async function addNari(data) {
  try {
    await naris.add(data).then(res => alert(`정상 저장되었습니다. ${res.id}`));
  } catch (err) {
    alert(`저장 과정에 문제가 발생했습니다..`);
  }
}
