import { firestore as db } from "./config";

const naris = db.collection("/naris");

const queries = {
  async search(tag) {
    const results = [];
    try {
      await naris.get().then(docs => {
        docs.forEach(doc => {
          const contents = doc.data();
          const { depName, shopName, shopAddr } = contents;
          if (
            depName.includes(tag) ||
            shopName.includes(tag) ||
            shopAddr.includes(tag)
          ) {
            results.push({ id: doc.id, contents });
          }
        });
      });
      return results;
    } catch (err) {
      return [];
    }
  }
};

export default queries;
