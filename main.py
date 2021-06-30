from quart import Quart, render_template, redirect, request
app = Quart(__name__, template_folder='rendertemplates/')

@app.route('/embed/')
async def embed():
    headertags = ""
    if "desc" in request.args:
        headertags = headertags + f'<meta property="og:description" content="{request.args.get("desc")}">'
    if "title" in request.args:
        headertags = headertags + f'<meta property="og:title" content="{request.args.get("title")}">'
    if "hex" in request.args:
        headertags = headertags + f'<meta name="theme-color" content="#{request.args.get("hex")}">'
    html = "<head>" + headertags + "</head><body>"
    if "url" in request.args:
        html = html + f'<meta http-equiv="refresh" content="0; URL={request.args.get("url")}"/>'
    return html

@app.route('/')
async def index():
    return await render_template("index.html")

@app.route('/index.js')
async def index_js():
  return await render_template("index.js")

@app.route('/index.css')
async def index_css():
  return await render_template("index.css")

app.run(host="0.0.0.0")