import { API_BASE_URL as baseUrl } from "configs/AppConfig";
import axiosFetch, { TOKEN_PAYLOAD_KEY } from "auth/FetchInterceptor";
import { AUTH_TOKEN } from "redux/constants/Auth";

function tokennize() {
  const jwtToken = localStorage.getItem(AUTH_TOKEN);
  return {
    [TOKEN_PAYLOAD_KEY]: `Bearer ${jwtToken}`,
  };
}

const headers = new Headers();
headers.append("Content-Type", "application/json");
headers.append("Access-Control-Allow-Origin", "*");

let FetcherService = {
  login: function (data) {
    return fetch({
      url: "/login_check",
      method: "post",
      headers: {
        "public-request": "true",
      },
      data: JSON.stringify(data),
    });
  },

  Predict: function (data) {
    return axiosFetch({
      url: "/predict",
      method: "POST",
      headers: headers,
      data: JSON.stringify(data),
    });
  },

  gettoken: async function (setdada) {
    let res = await fetch(baseUrl + "/api/login", {
      method: "post",
      body: JSON.stringify(setdada),
      headers: {
        "Content-Type": "application/json",
      },
    });

    return await res.json();
  },

  gettokenClient: function (data) {
    return axiosFetch({
      url: "/api/access-support",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    });
  },

  Logout: function (id, data) {
    return axiosFetch({
      url: `/api/logout`,
      method: "DELETE",
      headers: {
        "Content-Type": "aapplication/json",
        ...tokennize(),
      },
    });
  },

  AuthSignin: async function (setdada) {
    let res = await fetch(baseUrl + "/login_check", {
      method: "post",
      body: JSON.stringify(setdada),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await res.json();
  },

  /* GetUser: async function (id) {
    return axiosFetch({
      url: `/users/${id}`,
      method: "get",
    });
  },
  GetRole: async function (id) {
    return axiosFetch({
      url: `/roles/${id}`,
      method: "get",
    });
  },
  GetMessages: async function (params) {
    return axiosFetch({
      url: `/messages`,
      method: "get",
      params,
      headers: {
        "Content-Type": "application/json",
        ...tokennize(),
      },
    });
  },
  GetEvents: async function (params) {
    return axiosFetch({
      url: `/events`,
      method: "get",
      params,
      headers: {
        "Content-Type": "application/json",
        ...tokennize(),
      },
    });
  },
  PostParticipate: function (data) {
    return axiosFetch({
      url: `/participation_events`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...tokennize(),
      },
      data: JSON.stringify(data),
    });
  },*/

  //////////////////////////////////////////////////
  //////////////NATURE END POINT////////////////////
  GetNature: function (params) {
    return axiosFetch({
      url: `/api/natures?page=${params.page}`,
      method: "GET",
      params,
      headers: {
        "Content-Type": "application/json",
        ...tokennize(),
      },
    });
  },

  AddNature: function (data) {
    return axiosFetch({
      url: "/api/natures",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...tokennize(),
      },
      data: JSON.stringify(data),
    });
  },

  deleteNature: function (id, data) {
    return axiosFetch({
      url: `/api/natures/${id}`,
      method: "DELETE",
      headers: {
        "Content-Type": "aapplication/json",
        ...tokennize(),
      },
    });
  },

  PutNature: function (id, data) {
    return axiosFetch({
      url: `/api/natures/${id}`,
      method: "PUT",
      headers: {
        "Content-Type": "application/merge-patch+json",
      },
      data: JSON.stringify(data),
    });
  },

  //////////////////////////////////////////////////
  //////////////NATURE END POINT////////////////////

  //////////////////////////////////////////////////
  //////////////CONFIG SOLUTION END POINT////////////////////
  GetSolution: function (params) {
    return axiosFetch({
      url: `/api/solutions?page=${params.page}`,
      method: "GET",
      params,
      headers: {
        "Content-Type": "application/json",
        ...tokennize(),
      },
    });
  },

  AddSolution: function (data) {
    return axiosFetch({
      url: "/api/solutions",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...tokennize(),
      },
      data: JSON.stringify(data),
    });
  },

  UpdateSolution: function (id, data) {
    return axiosFetch({
      url: `/api/solutions/${id}`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...tokennize(),
      },
      data: JSON.stringify(data),
    });
  },

  deleteSolutions: function (id, data) {
    return axiosFetch({
      url: `/api/solutions/${id}`,
      method: "DELETE",
      headers: {
        "Content-Type": "aapplication/json",
        ...tokennize(),
      },
    });
  },

  //////////////////////////////////////////////////
  //////////////CONFIG NOTIFICATION MESSAGE////////////////////

  GetNotificationMessage: async function (params) {
    return axiosFetch({
      url: `api/messages`,
      method: "get",
      params,
    });
  },

  UpdateNotificationMessage: function (id, data) {
    return axiosFetch({
      url: `/api/messages/${id}`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...tokennize(),
      },
      data: JSON.stringify(data),
    });
  },

  //////////////////////////////////////////////////
  //////////////TIKET////////////////////

  AddTicket: function (data) {
    return axiosFetch({
      url: "/api/tickets",
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        ...tokennize(),
      },
      data: data,
    });
  },

  GetTecket: async function (params) {
    return axiosFetch({
      url: `/api/tickets`,
      method: "get",
      params,
    });
  },

  GetTicketinprogress: async function (params) {
    return axiosFetch({
      url: `/api/tickets`,
      method: "get",
      params,
    });
  },

  GetTickettoprogress: async function (params) {
    return axiosFetch({
      url: `/api/list-tickets/to-process`,
      method: "get",
      params,
    });
  },

  PostQualifAutoAffect: function (id, data) {
    return axiosFetch({
      url: `/api/affect/auto/${id}`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...tokennize(),
      },
      data: JSON.stringify(data),
    });
  },

  PostQualifAffectSupport: function (id, data) {
    return axiosFetch({
      url: `/api/affect/support/${id}`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...tokennize(),
      },
      data: JSON.stringify(data),
    });
  },

  PostRejetTicket: function (id, data) {
    return axiosFetch({
      url: `/api/affect/deny/${id}`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...tokennize(),
      },
      data: JSON.stringify(data),
    });
  },

  MakeCommentaire: function (id, data) {
    return axiosFetch({
      url: `/api/comments/${id}`,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...tokennize(),
      },
      data: JSON.stringify(data),
    });
  },

  GetTicketclosed: async function (params) {
    return axiosFetch({
      url: `/api/list-tickets/closed`,
      method: "get",
      headers: {
        "Content-Type": "application/json",
        ...tokennize(),
      },
      params,
    });
  },

  ////////////////////////////////////////////////
  ////////////page///////////////////////////////

  GetTecketPerpage: async function (params) {
    return axiosFetch({
      url: `/api/tickets`,
      method: "get",
      params,
    });
  },

  GetATecket: async function (id) {
    return axiosFetch({
      url: `/api/tickets/${id}`,
      method: "get",
    });
  },

  GetNewticket: async function (params) {
    return axiosFetch({
      url: `/api/list-tickets/new`,
      method: "get",
      params,
    });
  },

  GetticketDetails: async function (id) {
    return axiosFetch({
      url: `/api/tickets/${id}`,
      method: "get",
    });
  },
  //////////////////////////////////////////////////
  //////////////////////////////////

  ResetPasswordlink: function (data) {
    return axiosFetch({
      url: "/api/password/forgot",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    });
  },

  ResetPassword: function (data) {
    return axiosFetch({
      url: "/api/password/reset",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    });
  },

  deleteProfil: function (id, data) {
    return axiosFetch({
      url: `api/profils/${id}`,
      method: "DELETE",
      headers: {
        "Content-Type": "aapplication/json",
        ...tokennize(),
      },
    });
  },

  /////////////////////////////////
  ////////////////////////////////

  Getallprofil: async function (params) {
    return axiosFetch({
      url: `/api/profils`,
      method: "get",
      params,
    });
  },

  GetProfilDetails: async function (id) {
    return axiosFetch({
      url: `api/profils/${id}`,
      method: "get",
    });
  },

  UpdateProfile: function (id, data) {
    return axiosFetch({
      url: `api/profils/${id}`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...tokennize(),
      },
      data: JSON.stringify(data),
    });
  },

  RegisterProfil: function (data) {
    return axiosFetch({
      url: "api/profils",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    });
  },

  GetModulePermission: async function (params) {
    return axiosFetch({
      url: `/api/modules`,
      method: "get",
      params,
    });
  },

  ////////////////USER/////////
  GetUsers: async function (params) {
    return axiosFetch({
      url: `/api/users?page=${params.page}`,
      method: "get",
      params,
    });
  },

  RegisterUsers: function (data) {
    return axiosFetch({
      url: "api/users",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: JSON.stringify(data),
    });
  },

  UpdateUsers: function (id, data) {
    return axiosFetch({
      url: `api/users/${id}`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...tokennize(),
      },
      data: JSON.stringify(data),
    });
  },

  DeleteUsers: function (id) {
    return axiosFetch({
      url: `api/users/${id}`,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...tokennize(),
      },
    });
  },

  DesactiveUsers: function (id, data) {
    return axiosFetch({
      url: `/api/desactivate/users/${id}`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...tokennize(),
      },
      data: JSON.stringify(data),
    });
  },

  ActiveUsers: function (id, data) {
    return axiosFetch({
      url: `/api/activate/users/${id}`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...tokennize(),
      },
      data: JSON.stringify(data),
    });
  },

  ////////////////////////////////
  //////////////////////////////// AddUnite

  AddUnite: function (data) {
    return axiosFetch({
      url: "/api/units",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...tokennize(),
      },
      data: JSON.stringify(data),
    });
  },

  UpdateUnite: function (id, data) {
    return axiosFetch({
      url: `/api/units/${id}`,
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...tokennize(),
      },
      data: JSON.stringify(data),
    });
  },

  GetUnite: async function (params) {
    return axiosFetch({
      url: `/api/units`,
      method: "get",
      params,
    });
  },

  DeleteUnite: function (id) {
    return axiosFetch({
      url: `/api/units/${id}`,
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...tokennize(),
      },
    });
  },
  ///////////////////////////////////////////////////////
  //////////////////////////////////////////////////////
  GetCategories: async function (params) {
    return axiosFetch({
      url: `/api/categories`,
      method: "get",
      params,
    });
  },

  Processdirect: function (id, data) {
    return axiosFetch({
      url: `/api/process/direct/${id}`,
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        ...tokennize(),
      },
      data: data,
    });
  },

  Process: function (id, data) {
    return axiosFetch({
      url: `/api/process/${id}`,
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        ...tokennize(),
      },
      data: data,
    });
  },

  PostMemo: function (id, data) {
    return axiosFetch({
      url: `/api/memo/${id}`,
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        ...tokennize(),
      },
      data: data,
    });
  },
  PostPublish: function (id, data) {
    return axiosFetch({
      url: `/api/publish/${id}`,
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        ...tokennize(),
      },
      data: data,
    });
  },

  GetTicketSol: async function (id) {
    return axiosFetch({
      url: `/api/soluce/${id}`,
      method: "get",
    });
  },

  GetProssedTicket: async function (params) {
    return axiosFetch({
      url: `/api/list-tickets/processed`,
      method: "get",
      params,
    });
  },

  GetClientTicketUnsatisfied: async function (params) {
    return axiosFetch({
      url: `/api/list-tickets/unsatisfied`,
      method: "get",
      params,
    });
  },

  /*** CLIENT ****************************************CLIENT************************ CLIENT ***/

  GetClientTicketinprogress: async function (params) {
    return axiosFetch({
      url: `/api/clients-tickets/in-progress`,
      method: "get",
      params,
    });
  },

  GetClientticketDetails: async function (id) {
    return axiosFetch({
      url: `/api/clients-tickets/${id}`,
      method: "get",
    });
  },

  GetClientTicketclosed: async function (params) {
    return axiosFetch({
      url: `/api/clients-closed-tickets`,
      method: "get",
      params,
    });
  },
  GetClientTicketProcessed: async function (params) {
    return axiosFetch({
      url: `/api/clients-processed-tickets`,
      method: "get",
      params,
    });
  },
  /***FAQS Categories*******************************************FAQS Categories**************** */
  GetFaqsCategories: function (params) {
    return axiosFetch({
      url: `/api/faqCategories`,
      method: "GET",
      params,
      headers: {
        "Content-Type": "application/json",
        ...tokennize(),
      },
    });
  },

  AddCategorie: function (data) {
    return axiosFetch({
      url: "/api/faqCategories",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...tokennize(),
      },
      data: JSON.stringify(data),
    });
  },

  deleteCategorie: function (id, data) {
    return axiosFetch({
      url: `/api/faqCategories/${id}`,
      method: "DELETE",
      headers: {
        "Content-Type": "aapplication/json",
        ...tokennize(),
      },
    });
  },

  PutCategorie: function (id, data) {
    return axiosFetch({
      url: `/api/faqCategories/${id}`,
      method: "PUT",
      headers: {
        "Content-Type": "application/merge-patch+json",
      },
      data: JSON.stringify(data),
    });
  },

  GetCategorieDetais: function (id) {
    return axiosFetch({
      url: `/api/faqCategories/${id}`,
      method: "GET",
      headers: {
        "Content-Type": "application/merge-patch+json",
        ...tokennize(),
      },
    });
  },
  /***FAQS List*******************************************FAQS List**************** */
  GetFaqsList: function (params) {
    return axiosFetch({
      url: `/api/faqs`,
      method: "GET",
      params,
      headers: {
        "Content-Type": "application/json",
        ...tokennize(),
      },
    });
  },

  AddFaqsList: function (data) {
    return axiosFetch({
      url: "/api/faqs",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...tokennize(),
      },
      data: JSON.stringify(data),
    });
  },

  deleteFaqsList: function (id, data) {
    return axiosFetch({
      url: `/api/faqCategories/${id}`,
      method: "DELETE",
      headers: {
        "Content-Type": "aapplication/json",
        ...tokennize(),
      },
    });
  },

  AddFaqs: function (data) {
    return axiosFetch({
      url: "/api/faqs",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...tokennize(),
      },
      data: JSON.stringify(data),
    });
  },
  deleteFaqs: function (id) {
    return axiosFetch({
      url: `/api/faqs/${id}`,
      method: "DELETE",
      headers: {
        "Content-Type": "aapplication/json",
        ...tokennize(),
      },
    });
  },

  /***POST SATIS*******************************************POST SATIS**************** */
  PostSatis: function (id, data) {
    return axiosFetch({
      url: `/api/satis/${id}`,
      method: "POST",
      headers: {
        "Content-Type": "application/merge-patch+json",
      },
      data: JSON.stringify(data),
    });
  },

  /****DASHBOARD***********************************************DASHBOARS */
  GetStatGeneral: function (params) {
    return axiosFetch({
      url: `/api/stats/tickets`,
      method: "GET",
      params,
      headers: {
        "Content-Type": "application/json",
        ...tokennize(),
      },
    });
  },
  GetStatProfil: function (params) {
    return axiosFetch({
      url: `/api/stats/profil`,
      method: "GET",
      params,
      headers: {
        "Content-Type": "application/json",
        ...tokennize(),
      },
    });
  },

  GetStatInstitute: function (params) {
    return axiosFetch({
      url: `/api/stats/institution`,
      method: "GET",
      params,
      headers: {
        "Content-Type": "application/json",
        ...tokennize(),
      },
    });
  },

  GetStatMonth: function (params) {
    return axiosFetch({
      url: `/api/stats/months`,
      method: "GET",
      params,
      headers: {
        "Content-Type": "application/json",
        ...tokennize(),
      },
    });
  },
};

export default FetcherService;
