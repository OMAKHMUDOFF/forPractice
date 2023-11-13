import { QATypes } from "./ActionTypes";

function answerOpen(p) {
  return {
    type: QATypes.openAns,
    payload: p,
  };
}

export { answerOpen };

