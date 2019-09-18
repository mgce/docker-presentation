FROM mcr.microsoft.com/dotnet/core/aspnet:2.2-stretch-slim AS base
EXPOSE 80
EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:2.2-stretch AS build
WORKDIR /src
COPY ["Notes.Api.csproj", "Notes.Api/"]
RUN dotnet restore "Notes.Api/Notes.Api.csproj"
COPY [".", "Notes.Api/"]
WORKDIR /src/Notes.Api
RUN dotnet build "Notes.Api.csproj" -c Release -o /app

FROM build AS publish
RUN dotnet publish "Notes.Api.csproj" -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "Notes.Api.dll"]