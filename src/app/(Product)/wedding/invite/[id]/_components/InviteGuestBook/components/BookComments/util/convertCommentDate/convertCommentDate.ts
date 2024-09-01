const convertCommentDate = (date: string) => {
  const changedDate = new Date(date);

  return `${changedDate.getFullYear()}.${changedDate.getMonth() + 1}.${changedDate.getDate()}`;
};

export default convertCommentDate;
