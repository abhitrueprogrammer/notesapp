// components/NoteCard.tsx

interface NoteCardProps {
    title: string;
    description: string;
    content: string;
    date: string;
  }
  
  export default function NoteCard({
    title,
    description,
    content,
    date,
  }: NoteCardProps) {
    return (
      <div className="mx-20 my-10 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
        {/* Title */}
        <div className="bg-blue-500 text-white px-4 py-2">
          <h2 className="text-lg font-semibold">{title}</h2>
        </div>
  
        {/* Description */}
        <div className="p-4">
          <p className="text-gray-600 mb-2">{description}</p>
          {/* Content */}
          <p className="text-gray-700 text-sm break-words whitespace-normal w-full">
            {content}
          </p>
        </div>
  
        {/* Footer with Date */}
        <div className="px-4 py-2 bg-gray-100 text-right">
          <span className="text-sm text-gray-500">{date}</span>
        </div>
      </div>
    );
  }
  