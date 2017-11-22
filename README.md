# demo_npm_rbac
Demo project for role based access control


## Access Control Implementations

Basic Methods
* ACL
* RBAC

### ACL

ACL or Access Control List is an implementation of access control, usually represented as a table of privileges.

![ACL Table of user rights](https://cdn-images-1.medium.com/max/1000/1*cWIls-mP48UC5T5WPta9OQ.png)

### RBAC

RBAC or Role Based Access Control is an access control method where users are given roles and the roles determine what privileges they have. 

![RBAC Rights](https://cdn-images-1.medium.com/max/1000/0*v5k1zUQ7HSaqHfJp.png)


In the basic setting ACL is an implementation type. RBAC does not need to have a hierachy in the model. (HRBAC - Hierarchical Role Based Access Control)

## Access Control Types

### MAC/DAC (Mandatory/Discretionary Access Control) 
Focuses on the data object as the center of access right. 

### IBAC (Identity Based Access Control) 
This method focuses on the identity of the user as the basis of the privileges.

### RBAC (Role Based Access Control) 
Operational privileges are grouped into roles and each user is assigned a role. 

### ABAC (Attribute Based Access Control) 
Is an evolution of RBAC. ABAC aims to solve this problem by providing a framework for defining access rights based on the various properties of a user.

## Sources
[Implement Access Control in Node.js](https://blog.nodeswat.com/implement-access-control-in-node-js-8567e7b484d1)
