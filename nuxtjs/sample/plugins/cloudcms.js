var detect = function(context, parameterName, headerName, cookieName)
{
  return context.query[parameterName];
};

// context variables

// isStatic                                                                                                                                                   09:37:49
// isDev                                                                                                                                                      09:37:49
// isHMR                                                                                                                                                      09:37:49
// app                                                                                                                                                        09:37:49
// payload                                                                                                                                                    09:37:49
// error                                                                                                                                                      09:37:49
// base                                                                                                                                                       09:37:49
// env                                                                                                                                                        09:37:49
// ssrContext                                                                                                                                                 09:37:49
// redirect                                                                                                                                                   09:37:49
// beforeNuxtRender                                                                                                                                           09:37:49
// route                                                                                                                                                      09:37:49
// next                                                                                                                                                       09:37:49
// _redirected                                                                                                                                                09:37:49
// _errored                                                                                                                                                   09:37:49
// params                                                                                                                                                     09:37:49
// query                                                                                                                                                      09:37:49
// $config                                                                                                                                                    09:37:49
// $cloudcms

var build_branch = function(context)
{
  // repository
  var repositoryId = detect(context, "repository");
  if (!repositoryId) {
    if (context.env) {
      repositoryId = context.env.repositoryId;
    }
  }
  if (!repositoryId) {
    repositoryId = process.env.repositoryId;
  }

  // branch
  var branchId = detect(context, "branch");
  if (!branchId) {
    if (context.env) {
      branchId = context.env.branchId;
    }
  }
  if (!branchId) {
    branchId = process.env.branchId;
  }

  var bindExtraProperties_response = async function(response)
  {
    if (response && response.rows)
    {
      for (let row of response.rows)
      {
        bindExtraProperties_row(row);
      }
    }
  }

  var bindExtraProperties_row = async function(row)
  {
    try {
      row.defaultAttachmentUrl = (await context.$cloudcms.createAttachmentLink(repositoryId, branchId, row._doc));
    } catch (e) {
      // swallow
    }
  }


  ///

  var r = {};

  r.query = async function(query, pagination)
  {
    var response = (await context.$cloudcms.queryNodes(repositoryId, branchId, query, pagination));
    if (response && response.rows && response.rows.length > 0)
    {
      (await bindExtraProperties_response(response));
    }

    return response;
  };

  r.queryOne = async function(query, pagination)
  {
    var row = null;

    var response = (await context.$cloudcms.queryNodes(repositoryId, branchId, query, pagination));
    if (response && response.rows && response.rows.length > 0)
    {
      row = response.rows[0];
    }

    if (row)
    {
      bindExtraProperties_row(row);
    }

    return row;
  };

  r.createAttachmentLink = async function(nodeId, attachmentId)
  {
    var url = null;
    try {
      url = (await context.$cloudcms.createAttachmentLink(nodeId, attachmentId));
    } catch (e) {
      // swallow
    }

    return url;
  }

  return r;
};

export default function (context) {
  context.$branch = build_branch(context);
};
