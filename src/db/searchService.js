import { firestore as db } from "./config";

const naris = db.collection("/naris");

const queries = {
  async searchAll() {
    const results = [];
    try {
      await naris.get().then(docs => {
        docs.forEach(doc => {
          results.push({ id: doc.id, contents: doc.data() });
        });
      });
      return results;
    } catch (err) {
      return [];
    }
  }
};

export default queries;
