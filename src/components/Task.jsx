import { Grid, Card, CardHeader, IconButton, Button } from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import DeleteIcon from "@mui/icons-material/Delete";
import { ColorShadow, ColorBlack, ColorGreen2 } from "../utils/constans";
import { stylesCard } from "../utils/Styles";

export const Task = ({ task, updateOrDeleteTodoHandler }) => {
  const classes = stylesCard();

  return (
    <Grid item xs={12} sm={6} md={4} key={task.id}>
      <Card
        className={`${classes.root}`}
        style={{
          backgroundColor: task.completed ? ColorShadow : ColorGreen2,
        }}
      >
        <CardHeader
          avatar={
            <div aria-label="recipe" className={classes.avatarContainer}>
              <img src="/task.png" alt="avatar" className={classes.avatarImg} />
            </div>
          }
          action={
            task.completed ? (
              <IconButton
                aria-label="settings"
                onClick={() => updateOrDeleteTodoHandler(task.id)}
              >
                <DeleteIcon style={{ color: ColorBlack }} />
              </IconButton>
            ) : null
          }
          titleTypographyProps={{ className: classes.title }}
          subheaderTypographyProps={{ className: classes.subheader }}
          title={task.title}
          subheader={` ${task.description}`}
        />
        <div className={classes.buttonContainer}>
          {task.completed ? null : (
            <Button
              className={classes.bCounter}
              variant="contained"
              size="small"
              onClick={() => updateOrDeleteTodoHandler(task.id, task.completed)}
            >
              Mark as done
            </Button>
          )}
        </div>
      </Card>
    </Grid>
  );
};
