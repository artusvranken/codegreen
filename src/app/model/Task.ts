/** Class representing a Task */
export class Task
{
    private _id : number;
    private _description : string;
    private _priority : string;
    private _date : Date;
    
    constructor(id : number = -1, description : string = "A new task." , priority : string = "green", date : Date = new Date())
    {
        this.id = id;
        this.description = description;
        this.priority = priority;
        this.date = date;
    }
    
    /**
    * Get the id of the Task.
    * @return {number} The Tasks id.
    */
    get id() : number
    {
        return this._id;        
    }
    
    /**
    * Sets the id of the Tasks.
    * @param {string} id - The new id value.
    */
    set id(id : number)
    {
        if (typeof id === 'undefined')
        {
            throw new Error("Task id is invalid");
        }
    }
    
    /**
    * Get the description of the Task.
    * @return {string} The Tasks description.
    */
    get description() : string 
    {
        return this.description;
    }
    
    /**
    * Set the description of the Task.
    * @param {string} description - The new description.
    */
    set description(description : string)
    {
        this._description = description;
    }
    
    /**
    * Get the priority or the Task.
    * @return {string} The Tasks priority.
    */
    get priority() : string
    {
        return this._priority;
    }
    
    /**
    * Set the priority of the Task.
    * @param {string} priority - The new prority.
    */
    set priority(priority : string)
    {
        this._priority = priority;
    }
    
    /**
    * Get the creation date of the Task.
    * @return {Date} the date.
    */
    get date() : Date
    {
        return this.date;
    }
    
    /**
    * Set the creation date of the Task.
    * @param {Date} date - The new creation date.
    */
    set date(date : Date)
    {
        this.date = date;
    }
}