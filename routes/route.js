module.exports = router => {
  router.get('/route', async (ctx, next) => {
    ctx.body = 'hello route';
  });
};
