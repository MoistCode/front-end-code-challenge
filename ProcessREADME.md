## Process
* Since we're using controlled components; the flow should be:
  1. Child renders data via props
  2. Changes call handler in parent
  3. Handler changes parent state
  4. Parent passes down state data via props to children
   
* Broke out components that handle inputs and options to clean up profile component into `LabelInputItem` and `LabelOptionItem` respectively
  
* Broke out the form message into it's own component `FormMessage` with the option to indicate whether or not it should portray validity or invalidity.
  
* The components above were broken out to handle certain functionalities themselves such as:
  * Formatting successful/unsuccessful message
  * Remove or add invalid class names
  * Render elements based on props
  
* Since the options are static, I took them out of the component to prevent the array from constantly being re-created
* Added `noop`, a no operation function, into utils to prevent recreating the function and for use in default props

## Notes
* Although I did turn the `Profile` component into a stateful component; I do not believe it is the BEST approach
  * If I had more time I would use Redux and Redux-Act to handle data flow
    * Rationale
      * **Redux**: Can't beat a single source of truth to prevent any syncing issues when the app gets bigger
      * **Redux-Act**: Takes away some of the repetitiveness of Redux when creating and handling actions
* Another route I would also like I take is to possibly let the HTML elements handle themselves instead of validating through JavaScript via the `required` attribute for the `<input>` and `<select>` elements
* I prefer using functional components when a component isn't stateful. I would like to add `React.memo()` as it is a way to make our functional components a pure components without turning them into classes to optimize renders