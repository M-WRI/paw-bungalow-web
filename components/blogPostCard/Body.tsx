export const Body = ({
  title,
  previewText,
}: {
  title: string;
  previewText: string;
}) => {
  return (
    <div>
      <h5>{title}</h5>
      <p>{previewText}</p>
    </div>
  );
};
