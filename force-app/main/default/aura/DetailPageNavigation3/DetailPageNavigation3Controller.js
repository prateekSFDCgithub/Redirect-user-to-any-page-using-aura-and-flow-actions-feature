({     invoke : function(component, event, helper) {
        // Get the AccountIdVar attribute from the component
        var accountId = component.get("v.AccountIdVar"); 
        
        // Get the Lightning event to open the record in a new tab
        var redirect = $A.get("e.force:navigateToSObject");
        
        // Set parameters using AccountIdVar instead of recordId
        redirect.setParams({
            "recordId": accountId
        });
        
        // Open the account record
        redirect.fire();
    
}})