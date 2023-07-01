import { Grid, Card, CardHeader, IconButton, Button } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import { ColorShadow, ColorBlack } from "../utils/constans";
import { stylesCard } from "../utils/Styles";

export const Task = ({ task, updateOrDeleteTodoHandler }) => {
  const classes = stylesCard();

  if (task.length === 0) {
    return <h2>Not Todo Found!</h2>;
  }

  // return (
  //   <>
  //     <div>
  //       <h3>{task.title}</h3>
  //       <p>{task.description}</p>
  //       <button
  //         onClick={() => updateOrDeleteTodoHandler(task.id, task.completed)}
  //       >
  //         Mark as {task.completed ? "undone" : "done"}
  //       </button>
  //       {task.completed && (
  //         <button onClick={() => updateOrDeleteTodoHandler(task.id)}>
  //           Delete
  //         </button>
  //       )}
  //     </div>
  //   </>
  // );

  return (
    <Card
      className={`${classes.root}`}
      style={{
        backgroundColor: ColorShadow,
        marginTop: "20px",
      }}
    >
      <CardHeader
        avatar={
          <div aria-label="recipe" className={classes.avatarContainer}>
            <img src="/task.png" alt="avatar" className={classes.avatarImg} />
          </div>
        }
        titleTypographyProps={{ className: classes.title }}
        subheaderTypographyProps={{ className: classes.subheader }}
        title={task.title}
        subheader={`${task.description}`}
      />
      <button
        onClick={() => updateOrDeleteTodoHandler(task.id, task.completed)}
      >
        Mark as {task.completed ? "undone" : "done"}
      </button>
      {task.completed && (
        <button onClick={() => updateOrDeleteTodoHandler(task.id)}>
          Delete
        </button>
      )}
    </Card>
  );
};
