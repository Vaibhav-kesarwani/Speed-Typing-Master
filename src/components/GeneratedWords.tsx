const GeneratedWords = ({ words }: { words: string }) => {
  return (
    <div
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1, transition: { duration: 0.01 } }}
      className="text-slate-600"
    >
      {words}
    </div>
  );
};

export default GeneratedWords;
