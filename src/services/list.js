export function getTickets() {
  return fetch("https://randomuser.me/api/?results=10&nat=us").then(
    (response) => response.json()
  );
}

export function getTicketDetails() {
  return fetch("http://localhost:3333/list").then((data) => data.json());
  // .then((data) => console.log(data));
}
