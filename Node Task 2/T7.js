function withTimeout(p, t) {
  return Promise.race([
    p,
    new Promise((_, rej) => setTimeout(() => rej("timeout"), t))
  ]);
}

let promises = [
  400, 1200, 800, 2500, 600
].map((t, i) =>
  withTimeout(new Promise(r => setTimeout(() => r("fetch" + (i+1)), t)), 1000)
);

Promise.allSettled(promises).then(res => {
  console.log(res);
});