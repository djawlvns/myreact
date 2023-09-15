import { useEffect, useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
const Card = styled.div`
  width: 500px;
  height: 300px;
  background: linear-gradient(90deg, lightblue, dodgerblue);
  color: white;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const Icon = styled.div`
  text-align: center;
  img {
    width: 100%;
    margin-left: 20px;
    margin-top: 20px;
  }
`;
const Weather = styled.div`
  display: flex;
  flex-direction: column;
  text-align: end;
  padding-top: 5px;
  padding-right: 30px;
`;
const Temp = styled.div`
  font-size: 5rem;
  i {
    font-size: 2.5rem;
  }
`;
const City = styled.div`
  font-size: 2.5rem;
`;
const Info = styled.div`
  font-size: 1.5rem;
  margin-top: 20px;
`;

export function OpenWeather({ cityName }) {
  const API_KEY = "a75c242d33b39306b898209700bb988f";
  const API_KEY_NINJA = "kTjGLKb6vVHF3ILZrQwrOw==8d2rn7wmExFvfS1e";
  const [icon, seticon] = useState(null);
  const [temp, settemp] = useState(0);
  const [city, setcity] = useState("");
  const [weather, setweather] = useState("");

  useEffect(() => {
    if (cityName) {
      const urlToNinja = `https://api.api-ninjas.com/v1/city?name=${cityName}`;
      fetch(urlToNinja, { headers: { "X-Api-Key": API_KEY_NINJA } })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          const position = {
            coords: {
              latitude: data[0].latitude,
              longitude: data[0].longitude,
            },
          };
          geoOK(position);
        })
        .catch((error) => {
          geoError(error);
        });
    } else {
      navigator.geolocation.getCurrentPosition(geoOK, geoError);
    }
  }, []);

  function geoOK(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setcity(data.name);
        settemp(parseInt(data.main.temp));
        seticon(data.weather[0].icon);
        setweather(data.weather[0].main);
        // description.innerHTML = data.weather.description
      })
      .catch((error) => {
        console.log("요청이 실패했습니다", error);
      });
  }
  function geoError() {
    alert("현재 위치정보를 찾을 수 없습니다.");
  }
  return (
    <>
      <Container>
        <Card>
          <Icon>
            <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`}></img>
          </Icon>
          <Weather>
            <Temp>
              {temp}
              <i className="ti ti-temperature-celsius"></i>
            </Temp>
            <City>{city}</City>
            <Info>{weather}</Info>
          </Weather>
        </Card>
      </Container>
    </>
  );
}
