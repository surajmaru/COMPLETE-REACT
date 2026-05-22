import { use } from "react";
import { useActionState } from "react";
import { OpinionsContext } from "../store/opinions-context";
import Submit from "./Submit";

export function NewOpinion() {
  const { addOpinion } = use(OpinionsContext);

  async function formSubmit(prevState, formData){
    const name = formData.get("userName");
    const title = formData.get("title");
    const body = formData.get("body");

    let errors = [];

    if(name.trim().length === 0){
      errors.push("Please enter your name");
    }
    if(title.trim().length < 5){
      errors.push("Title must be at least 5 characters long");
    }
    if(body.trim().length < 10 || body.trim().length > 300){
      errors.push("Body must be between 10 and 300 characters long");
    }

    if(errors.length > 0){
      return {
        errors,
        enteredValues: {
          name,
          title,
          body,
        }
      }
    }

    await addOpinion({
      title, body, userName: name
    })

    return {
      errors: null,
    }
    
  }

  const [state, formSubmitAction, pending] = useActionState(formSubmit, {
    errors: null,
  });

  return (
    <div id="new-opinion">
      <h2>Share your opinion!</h2>
      <form action={formSubmitAction}>
        <div className="control-row">
          <p className="control">
            <label htmlFor="userName">Your Name</label>
            <input type="text" id="userName" name="userName" defaultValue={state.enteredValues?.name} />
          </p>

          <p className="control">
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" defaultValue={state.enteredValues?.title}/>
          </p>
        </div>
        <p className="control">
          <label htmlFor="body">Your Opinion</label>
          <textarea id="body" name="body" rows={5} defaultValue={state.enteredValues?.body}></textarea>
        </p>

        {
          state.errors && (
            <ul className="errors">
              {state.errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          )
        }

        <Submit />
      </form>
    </div>
  );
}
