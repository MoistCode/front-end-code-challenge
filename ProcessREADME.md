## Process
* Since we're using controlled components; the flow should be:
  1. Child renders data via props
  2. Changes call handler in parent
  3. Handler changes parent state
  4. Parent passes down state data via props to children
   
* Broke out components that handle inputs and options to clean up profile component into `LabelInputItem` and `LabelOptionItem` respectively
  
* Broke out the form message into it's own component `FormMessage` with the option to indicate whether or not it should portray validity or invalidity.
  
* The components above were broken out to handle certain functionalities themselves such as:
  * Formatting message
  * Remove or add invalid class names
  * Render elements based on props
  
* Since the options are static, I took them out of the component to prevent the array from constantly being re-created
* Added `noop`, a no operation function, into utils to prevent recreating the function and for use in default props
