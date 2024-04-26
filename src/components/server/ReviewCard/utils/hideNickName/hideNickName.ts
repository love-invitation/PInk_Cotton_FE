const hideNickName = (nickName: string) => {
  const convertedNickName = [
    nickName[0],
    '*'.repeat(nickName.length - 2),
    nickName[nickName.length - 1],
  ].join('');

  return convertedNickName;
};

export default hideNickName;
