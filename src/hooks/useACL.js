import RoleCatalog from "../constants/RoleCatalog";

export const useACL = () => {

  const roles = [RoleCatalog.MANAGER, RoleCatalog.USER];

  const isRoleExists = (role) => {
    if (!role) {
      return null;
    }

    return roles.includes(role);
  }

  const isManager = (role) => {
    return RoleCatalog.MANAGER === role;
  };

  const isUser = (role) => {
    return RoleCatalog.USER === role;
  };

  return {
    isRoleExists,
    isManager,
    isUser
  }
}
