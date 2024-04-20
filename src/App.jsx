import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import { usersAtomFamily } from "./atoms";

function App() {
  function handleClick() {
    const container = document.querySelector(".card-container");
    const button = document.querySelector(".card-button");

    button.addEventListener("click", () => {
      container.scrollLeft += container.offsetWidth; // Scroll by one card width
    });
  }

  return (
    <div>
      <div className="card-container">
        <RecoilRoot>
          <UserCard id={1}></UserCard>
          <UserCard id={2}></UserCard>
          <UserCard id={3}></UserCard>
          <UserCard id={4}></UserCard>
        </RecoilRoot>
      </div>
      <button onClick={handleClick} className="card-button">
        Scroll
      </button>
    </div>
  );
}

function UserCard({ id }) {
  const User = useRecoilValue(usersAtomFamily(id));

  return (
    <div className="card">
      <div className="image-container">
        <img src={User.profilePicture}></img> <br />
      </div>
      <b>{User.name}</b>
      <span style={{ color: "GrayText" }}>{User.age}</span>
      <div style={{ color: "GrayText" }}>{User.location}</div>

      <div className="info" style={{ display: "flex", flexDirection: "row" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>
            {User.followers >= 1000
              ? User.followers / 1000 + "k"
              : User.followers}
          </span>
          <span>Followers</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>
            {User.likes >= 1000 ? User.likes / 1000 + "k" : User.likes}
          </span>
          <span>Likes</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <span>{User.photos}</span>
          <span>Photos</span>
        </div>
      </div>
    </div>
  );
}

export default App;
