import * as coda from "@codahq/packs-sdk";

export const pack = coda.newPack();

pack.addFormula({
  name: "Delay",
  description:
    "Delay the execution of a Coda formula for a number of seconds. Use with RunActions().",
  parameters: [
    coda.makeParameter({
      type: coda.ParameterType.Number,
      name: "seconds",
      description: "How long to delay for (max 60)",
    }),
  ],
  resultType: coda.ValueType.String,
  execute: async function ([seconds]) {
    // Note: setTimeout() is only supported if you first run
    // `npx coda setOption path/to/pack.ts timerStrategy fake`, which
    // stores the timer treatment preference in .coda-pack.json
    await setTimeout(() => {
      return "A";
    }, seconds * 1000);
    return "B";
  },
});
