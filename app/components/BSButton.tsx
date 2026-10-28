export default function BSButton({ label }: {label: string}){
    return (
        <button className="p-2 bg-blue-600 text-white rounded">
            {label}
            My Button
        </button>
    );
}