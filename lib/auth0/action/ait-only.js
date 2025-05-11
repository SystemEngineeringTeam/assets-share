exports.onExecutePreUserRegistration = async (event, api) => {
  if (event.client.client_id === event.secrets.TARGET_APP) {
    const allowlist = ["aitech.ac.jp"];
    const userHasAccess = allowlist.some((domain) => {
      const targetDomain = event.user.email.split("@").at(1);
      if (targetDomain === undefined) return false;
      return targetDomain.toLowerCase() === domain;
    });
    if (!userHasAccess) {
      const userMessage =
        "当該メールアドレス（ドメイン）は登録できません。@aitech.ac.jp のメールアドレスを使用してください。";
      api.access.deny("banned email address", userMessage);
    }
  }
};
