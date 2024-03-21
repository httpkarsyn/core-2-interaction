// Select your container element.
var containerElement = document.querySelector('.Container');

// Define the insert function with a parameter.
function insertDataItem(dataItem) {

	// Update this to your match your collection's metadata.
	containerElement.innerHTML += `
		<div class="Car" style="background: ${ dataItem['color'] }">
			<p>Trash: ${ dataItem['trash'] }</p>
			<p>Material: ${ dataItem['material'] }</p>
			<p>Price: ${ dataItem['price'] }</p>
		</div>
	`
}

// Run the insert function for every element in the collection array
data.forEach((dataItem) => {
	insertDataItem(dataItem)
});

mainElement.innerHTML += `
<article class="Container">
<h2> ${ Trash['title'] } </h2>
<img src="./media/${ Trash['image'] }" />
<p> ${ Trash['price'] } </p>
</article>
`;