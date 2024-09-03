/* eslint-disable react/prop-types */
export default function Project({ title, link, host, description, stack, image, isOdd }) {
  //   const projectStack = JSON.parse(stack);
  // console.log(projectStack);
  return (
    <div className={`project`}>
      <div className={`image ${isOdd ? "image-left" : ""}`}>
        <img loading="lazy" src={`/images/projects/${image}`} alt={title} />
      </div>
      <div className={`content ${isOdd ? "content-right" : ""}`}>
        <div className="featured-project">{host}</div>
        <div className="title">
          <a href={link}>{title}</a>
        </div>
        <div className="description" dangerouslySetInnerHTML={{ __html: description }} />
        <div className="stack">
          {stack.map((item, index) => (
            <span key={index}>{item}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
