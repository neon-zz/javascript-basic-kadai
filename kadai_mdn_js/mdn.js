const date = new Date();

const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const formattedDate = date.toLocaleDateString('jp-JP', options);
console.log(formattedDate);