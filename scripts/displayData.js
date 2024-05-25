async function displayData(element, type, data) {
  try {
    const { timezone, country, city, postcode, lat, lon } = await getTimeZone(
      type,
      data
    );
    console.log(await getTimeZone(type, data));
    console.log(timezone, country, city, postcode, lat, lon);
    const container = `<div class="container my-4 pt-4 pb-5 px-3 border border-2 ${
      type === "text" ? "border-secondary" : "border-dark"
    } ">
  <p>Name Of Time Zone : <strong class="name">${timezone.name}</strong></p>
  <div class="d-flex">
    <p>Lat : <strong class="lat">${lat}</strong></p>
    <p class="ms-5">Long : <strong class="long">${lon}</strong></p>
  </div>
  <p>Offset STD : <strong class="offset-std">${timezone.offset_STD}</strong></p>
  <p>Offset STD Seconds : <strong class="offset-std-seconds">${
    timezone.offset_STD_seconds
  }</strong></p>
  <p>Offset DST : <strong class="offset-dst">${timezone.offset_DST}</strong></p>
  <p>Offset DST Seconds : <strong class="offset-dst-seconds">${
    timezone.offset_DST_seconds
  }</strong></p>
  <p>Country : <strong class="country">${country}</strong></p>
  <p>Postcode : <strong class="postcode">${postcode || "not find"}</strong></p>
  <p>City : <strong class="city">${city || "not find"}</strong></p>
  </div>`;

    element.innerHTML = container;
  } catch (error) {}
}
