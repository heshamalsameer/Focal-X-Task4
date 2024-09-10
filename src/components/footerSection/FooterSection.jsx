export const FooterSection = ({ links }) => {
  //   console.log(links);

  return (
    <>
      <h6>{links.title}</h6>
      <ul>
        {links.content.map((item, index) => {
          return (
            <li key={index}>
              <a href="#">{item}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};
