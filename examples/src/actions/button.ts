export const onClickButton = () => {
  return new Promise<void>((resolve) => {
    setTimeout(() => {
      return resolve()
    }, 1000)
  })
}
