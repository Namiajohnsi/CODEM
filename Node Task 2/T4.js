function recursiveChain(n) {
  let p = Promise.resolve();

  for (let i = 1; i <= n; i++) {
    p = p.then(() => console.log("Step", i));
  }

  p.then(() => {
    process.nextTick(() => console.log("nextTick"));
    setImmediate(() => console.log("immediate"));
    setTimeout(() => console.log("timeout"), 0);
  });
}
recursiveChain(5);