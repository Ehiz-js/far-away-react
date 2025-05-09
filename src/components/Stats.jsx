export default function Stats({ items }) {
	if (!items.length)
		return (
			<p className="footer">
				<em>Start adding some item to your packing list 🚀</em>
			</p>
		);

	const numItems = items.length;
	const numPacked = items.filter((item) => item.packed).length;
	const packedPercent =
		numItems !== 0 ? Math.round((numPacked / numItems) * 100) : 0;

	return (
		<footer className="stats">
			<em>
				{packedPercent === 100 ? (
					"You got everything? Ready to go✈️"
				) : (
					<>
						👜You have {numItems} items on your list and you already packed{" "}
						{numPacked} ({packedPercent}%)
					</>
				)}
			</em>
		</footer>
	);
}
