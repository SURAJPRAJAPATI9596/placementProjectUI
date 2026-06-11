import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import logo from "../../assets/HeroImg/logo.png";

function MultiActionAreaCard({
  featureImg = "",
  featureTitle = "",
  featureDescription = "",
  featureLink = "surajKumar",
}) {
  return (
    <div className="rounded-2xl shadow-lg text-center hover:scale-105 transition duration-300 w-full border border-b-blue-50 h-96">
      <img
        src={featureImg}
        alt={featureImg}
        className="w-full h-48  object-cover rounded-t-2xl"
      />

      <h3 className="mt-4 text-xl font-semibold">{featureTitle}</h3>

      <p className="text-white ">{featureDescription}</p>

      <button className="mt-4 px-4 py-2 rounded-lg bg-black text-white mb-1">
        Explore
      </button>
    </div>
  );
}
export default MultiActionAreaCard;
